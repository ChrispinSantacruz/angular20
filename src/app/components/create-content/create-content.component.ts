import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  contentForm: FormGroup;

  constructor(private fb: FormBuilder, private contentService: ContentService, private router: Router) {
    this.contentForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      poster_url: ['', Validators.required],
      trailer_url: ['', Validators.required],
      duration_minutes: [null],
      num_episodes: [null]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.contentForm.valid) {
      this.contentService.createContent(this.contentForm.value).subscribe(response => {
        console.log('Content created successfully', response);
        this.router.navigate(['/view']);
      });
    }
  }
}
