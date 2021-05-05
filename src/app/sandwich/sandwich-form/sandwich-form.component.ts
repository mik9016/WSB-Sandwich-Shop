import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  MaxLengthValidator,
  Validators,
} from "@angular/forms";
import { Ingredient, Sauce } from "../sandwich";
import { SandwichService } from "../sandwich.service";

@Component({
  selector: "wsb-sandwich-form",
  templateUrl: "./sandwich-form.component.html",
  styleUrls: ["./sandwich-form.component.css"],
})
export class SandwichFormComponent implements OnInit {
  sandwichForm: FormGroup;

  showErrors: boolean = false;

  sauces = [
    { label: "None", value: Sauce.None },
    { label: "Mustart sauce", value: Sauce.Mustard },
    { label: "Mayo sauce", value: Sauce.Mayo },
    { label: "Barbaque sauce", value: Sauce.Bbq },
  ];

  constructor(private formBuilder: FormBuilder, private sandwichService: SandwichService) {}

  public ngOnInit(): void {
    this.sandwichForm = this.formBuilder.group({
      name: ["", [Validators.minLength(5), Validators.maxLength(20)]],

      ingredients: this.formBuilder.group({
        [Ingredient.Lettuce]: false, // {cheese: false}
        [Ingredient.Chorizo]: false,
        [Ingredient.Cheese]: false,
        [Ingredient.Tomato]: false,
        [Ingredient.Ham]: false,
      }),
      sauce: Sauce.Bbq,
      vege: false,
      price: [0, Validators.max(20)],
    });
  }

  mapIngredients(ingredients: object) {
    // { lettuce: false, tomato: true, ... } --> [ 'tomato', ... ]
    // 1. Object.entries({ lettuce: false }) --> [ ['lettuce', false] ]
    // 2. [ ['tomato', true] ]
    // 3. [ 'tomato' ]
    return Object.entries(ingredients)
      .filter((ingredient) => ingredient[1]) // LUB .filter(([, checked]) => checked)
      .map((ingredient) => ingredient[0]); // LUB .map(([ingredient]) => ingredient)
  }

  save(): void {
    this.showErrors = true;

    if (this.sandwichForm.valid) {
      const formValue = this.sandwichForm.getRawValue();
      const checkedIngredients = this.mapIngredients(formValue.ingredients);
      const sandwich = {
        ...formValue,
        ingredients: checkedIngredients
      };
      this.sandwichService.postSandwich(sandwich)
        .then(()=>{console.log('Kanapka została zapisana')})
        .catch(()=> {console.error('Wszyscy zginiemy!! Błąd!')})
      console.log(sandwich);
    }
  }
}
