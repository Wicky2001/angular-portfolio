import { Component } from '@angular/core';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import WorkExperience from '../../../interfaces';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.scss',
})
export class WorkSectionComponent {
  // featureCardTitles: any[] = [
  //   { title: 'Hack Venture', url: 'carousel/hackventure.jpeg' },
  //   { title: 'TechX', url: 'carousel/techx.jpeg' },
  //   { title: 'Intelli Hack', url: 'carousel/intellihack.jpeg' },
  // ];

  workData: WorkExperience[] = [
    {
      title: 'OXZON AI',
      duration: '6 Months',
      position: 'AI Engineer',
      type: 'Intern',
      description:
        'Worked on LLMs, fine-tuning models, and building AI workflows with LangChain and Hugging Face to improve NLP model performance.',
    },

    {
      title: 'ATLATO',
      duration: '6 Months',
      position: 'Software Engineer',
      type: 'Intern',
      description:
        'Developed web applications with Angular, Bootstrap, and Node.js, focusing on front-end design and back-end API integration.',
    },
  ];
}
