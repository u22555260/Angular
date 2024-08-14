import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Review } from '../../shared/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent  implements OnInit {
  reviews: Review[] = [];
  reviewImg!: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getReviews();
  }

  deleteReview(id: number) {
    const confirmed = window.confirm('Are you sure you want to delete this review?');
  
    if (confirmed) {
      console.log('delete id', id);
      this.dataService.deleteReview(id).subscribe(result => {
        console.log(result);
        this.getReviews(); // Refresh the reviews list after deletion
      });
    }
  }

  getReviews() {
    this.dataService.GetReviews().subscribe((result: Review[]) => {
      this.reviews = result;
      this.loadReviewImages();
    });
  }

  loadReviewImages() {
    this.reviews.forEach(review => {
      // Assuming 'review_ImageUrl' is the property containing the image URL in your Review model
      const imageUrl = review.review_ImageUrl;
      // Preload the image to ensure it's loaded when displayed
      const img = new Image();
      img.src = imageUrl; // Start loading the image
      this.reviewImg = imageUrl;
    });
  }

  reviewIdToNumber(reviewId: any): number {
    return typeof reviewId === 'number' ? reviewId : parseInt(reviewId, 10);
  }

}
