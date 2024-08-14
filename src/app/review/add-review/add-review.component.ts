import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent {
  reviewForm!: FormGroup;

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.reviewForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      review_Status: [''],
      review_Rating: [''],
      review_Description: ['']
    });
  }


  onSubmit(): void {
    const newReview = this.reviewForm.value;
    this.dataService.addReview(newReview).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['review']),
      error: (error) => console.log(error.error)
    });
  }
}
