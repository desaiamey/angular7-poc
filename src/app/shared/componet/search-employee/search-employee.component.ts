import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm =  this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  /**
   * Search employee by name
   */
  public searchEmployee(): void {
    this.searchService.search(this.searchForm.controls.name.value).pipe()
    .subscribe(data => {
      console.log(data);
    });
  }

}
