import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  currentSchoolIndex = 0;
  currentTutorIndex = 0;
  Math = Math;
  searchTerm = '';

  tutoringService = [
    {
      title: 'Relaxing and Learning',
      description:
        'There are several sections available in different versions, but most of them have fun',
      icon: '/images/Button.png',
    },
    {
      title: 'Certificate',
      description:
        'We are constantly improving the material for the lessons we want to pass on to others.',
      icon: '/images/lucide_award.png',
    },
    {
      title: 'Private Mentoring',
      description:
        'All of our specialists in special education have the best educational degrees',
      icon: '/images/fa-regular_smile.png',
    },
    {
      title: 'Creative Thinking',
      description:
        'All of our specialists in special education have the best educational degrees.',
      icon: '/images/arcticons_goodwy-gallery.png',
    },
  ];

  schoolService = [
    {
      name: 'King’s Quarters',
      color: '#008080',
    },
    {
      name: 'Queen’s Gambit',
      color: '#D06412',
    },
    {
      name: 'Bishop’s Retreat',
      color: '#5D5FEF',
    },
    {
      name: 'Knight’s Nook',
      color: '#222222',
    },
    {
      name: 'Rook’s Rest',
      color: '#008080',
    },
    {
      name: 'Caleb High School',
      color: '#D06412',
    },
    {
      name: 'Sunshine Comprehensive',
      color: '#008080',
    },
    {
      name: 'Queen’s College',
      color: '#D06412',
    },
    {
      name: 'Pawn’s Perch',
      color: '#222222',
    },
    {
      name: 'King’s Quarters',
      color: '#008080',
    },
    {
      name: 'Queen’s Gambit',
      color: '#D06412',
    },
    {
      name: 'Bishop’s Retreat',
      color: '#5D5FEF',
    },
    {
      name: 'Knight’s Nook',
      color: '#222222',
    },
    {
      name: 'Rook’s Rest',
      color: '#008080',
    },
    {
      name: 'Caleb High School',
      color: '#D06412',
    },
    {
      name: 'Sunshine Comprehensive',
      color: '#008080',
    },
    {
      name: 'Queen’s College',
      color: '#D06412',
    },
    {
      name: 'Pawn’s Perch',
      color: '#222222',
    },
  ];

  tutorService = [
    {
      name: 'Devon Lane',
      role: 'Senior Developer',
      img: '/images/Image.png',
      rate: 4.6,
      students: 854,
    },
    {
      name: 'Darrell Steward',
      role: 'Digital Product Designer',
      img: '/images/Image1.png',
      rate: 4.9,
      students: 451444,
    },
    {
      name: 'Jane Cooper',
      role: 'UI/UX Designer ',
      img: '/images/Image2.png',
      rate: 4.8,
      students: 435671,
    },
    {
      name: 'Albert Flores',
      role: 'Adobe Instructor',
      img: '/images/Image3.png',
      rate: 4.7,
      students: 511123,
    },
    {
      name: 'Devon Lane',
      role: 'Senior Developer',
      img: '/images/Image.png',
      rate: 4.6,
      students: 854,
    },
    {
      name: 'Darrell Steward',
      role: 'Digital Product Designer',
      img: '/images/Image1.png',
      rate: 4.9,
      students: 451444,
    },
    {
      name: 'Jane Cooper',
      role: 'UI/UX Designer ',
      img: '/images/Image2.png',
      rate: 4.8,
      students: 435671,
    },
    {
      name: 'Albert Flores',
      role: 'Adobe Instructor',
      img: '/images/Image3.png',
      rate: 4.7,
      students: 511123,
    },
  ];

  get filteredSchools() {
    if (!this.searchTerm.trim()) return this.schoolService;
    return this.schoolService.filter((school) =>
      school.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get visibleSchools() {
    return this.filteredSchools.slice(
      this.currentSchoolIndex,
      this.currentSchoolIndex + 3
    );
  }

  nextSchools() {
    if (this.currentSchoolIndex + 3 < this.schoolService.length) {
      this.currentSchoolIndex += 3;
    }
  }

  prevSchools() {
    if (this.currentSchoolIndex - 3 >= 0) {
      this.currentSchoolIndex -= 3;
    }
  }

  get totalPages() {
    return Math.ceil(this.schoolService.length / 3);
  }

  get visiblePageNumbers() {
    const total = this.totalPages;
    const currentPage = Math.floor(this.currentSchoolIndex / 3);
    let start = Math.max(0, currentPage - 1);
    let end = start + 4;
    if (end > total) {
      end = total;
      start = Math.max(0, end - 4);
    }
    return Array.from({ length: end - start }, (_, i) => start + i);
  }

  get filteredTutor() {
    if (!this.searchTerm.trim()) return this.tutorService;
    return this.tutorService.filter((tutor) =>
      tutor.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get visibleTutor() {
    return this.filteredTutor.slice(
      this.currentTutorIndex,
      this.currentTutorIndex + 2
    );
  }

  nextTutor() {
    if (this.currentTutorIndex + 2 < this.tutorService.length) {
      this.currentTutorIndex += 2;
    }
  }

  prevTutor() {
    if (this.currentTutorIndex - 2 >= 0) {
      this.currentTutorIndex -= 2;
    }
  }

  get totalTutorPages() {
    return Math.ceil(this.tutorService.length / 2);
  }

  get visibleTutorPageNumbers() {
    const total = this.totalTutorPages;
    const currentPage = Math.floor(this.currentTutorIndex / 2);
    let start = Math.max(0, currentPage - 1);
    let end = start + 3;
    if (end > total) {
      end = total;
      start = Math.max(0, end - 3);
    }
    return Array.from({ length: end - start }, (_, i) => start + i);
  }
}
