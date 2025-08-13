import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {
  profilePictureUrl: string = 'images/profilePictureBox.jpg';
  pdfUrl: string = 'pdf/resume.pdf';

  downloadFile(): void {
    const link = document.createElement('a');
    link.href = this.pdfUrl; // Set the file URL to download
    link.download = 'Pasindu_Wickramarathna_CV.pdf'; // Set the default filename for the download
    link.click(); // Trigger the download
  }
}
