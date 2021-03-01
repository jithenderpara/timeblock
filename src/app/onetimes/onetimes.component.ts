import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import Utils from '../common/Utils';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/timeblock';

@Component({
selector: 'app-onetimes',
  templateUrl: './onetimes.component.html',
  styleUrls: ['./onetimes.component.sass']
})
export class OnetimesComponent implements OnInit {
	constructor(private fb: FormBuilder, private toastr: ToastrService, private dataService: DataService) {}
	weeks = [];
	months = [];
	hours = [];
	minutes = [];
	years = [];
	dropdownList = [];
	selectedItems = [];
	dropdownSettings = {};
	timeblockForm = new FormGroup({
		category: new FormControl('', [Validators.required]),
		item: new FormControl('', [Validators.required]),
		frmminutes: new FormControl('', [Validators.required]),
		frmhours: new FormControl('', [Validators.required]),
		tominutes: new FormControl('', [Validators.required]),
		tohours: new FormControl('', [Validators.required]),
		years: new FormControl('', [Validators.required]),
		monthsArray: this.fb.array([], [Validators.required]),
		weeksArray: this.fb.array([], [Validators.required])
	});
	ngOnInit() {
		this.weeks = Utils.weeks();
		this.months = Utils.months();
		this.hours = Utils.hours();
		this.minutes = Utils.minutes();
		this.years = Utils.years(2000, 2021);
		this.dropdownList = [
			{ item_id: 1, item_text: 'Topic' },
			{ item_id: 2, item_text: 'backend' }
		];
		this.selectedItems = [{ item_id: 1, item_text: 'Topic' }];
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'item_id',
			textField: 'item_text',
			selectAllText: 'Select All',
			unSelectAllText: 'UnSelect All',
			itemsShowLimit: 3,
			allowSearchFilter: true
		};
	}
	onItemSelect(item: any) {
		console.log(item);
	}
	onSelectAll(items: any) {
		console.log(items);
	}
	getWeeks() {
		return Utils.weeks();
  }
  errors = [];

  calculateErrors(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.errors = this.errors.concat(this.calculateErrors(control));
        return;
      }

      const controlErrors = control.errors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.errors.push({
            controlName: field,
            errorName: keyError,
            errorValue: controlErrors[keyError]
          });
        });
      }
    });

    // This removes duplicates
    this.errors = this.errors.filter((error, index, self) => self.findIndex(t => {
      return t.controlName === error.controlName && t.errorName === error.errorName;
    }) === index);
    return this.errors;
  }
	onMonthsCheckboxChange(e) {
		const monthsArray: FormArray = this.timeblockForm.get('monthsArray') as FormArray;

		if (e.target.checked) {
			monthsArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			monthsArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					monthsArray.removeAt(i);
					return;
				}
				i++;
			});
		}
	}
	onWeeksCheckboxChange(e) {
		const weeksArray: FormArray = this.timeblockForm.get('weeksArray') as FormArray;

		if (e.target.checked) {
			weeksArray.push(new FormControl(e.target.value));
		} else {
			let i: number = 0;
			weeksArray.controls.forEach((item: FormControl) => {
				if (item.value == e.target.value) {
					weeksArray.removeAt(i);
					return;
				}
				i++;
			});
		}
	}
	formSubmit(formdata: any): void {
    
		if (this.timeblockForm.dirty && this.timeblockForm.valid) {
			const category= formdata.category.map(item=>item.item_text);
			const requestParams={
				category: category.toString(),
				item: formdata.item,
				sHours:formdata.frmhours,
				sMinutes: formdata.frmminutes,
				eHours:formdata.tohours,
				eMinutes: formdata.tominutes,
				months: formdata.monthsArray.toString(),
				days: formdata.weeksArray.toString(),
				years: formdata.years
			}
			this.dataService.sendGetRequest(requestParams)
			  .subscribe((data:any) => {
			    if (data.success === false) {
			      // this.toastr.error(data.message);
			    } else {
			      this.toastr.error('Back end Service Error', 'Srvice error!');
			      // this.router.navigate(['login']);
			    }
			    this.timeblockForm.reset();
			  });
		}else{
      this.errors = [];
    this.calculateErrors(this.timeblockForm);
    console.log(this.errors)
      this.toastr.error('Please enter required fields', 'Form Error!');
    }
	}
	formReset(){
		this.timeblockForm.reset();
	}
}
