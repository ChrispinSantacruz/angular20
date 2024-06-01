import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {
  contents: any[] = [];
  isAdmin: boolean = false;

  constructor(private contentService: ContentService, private authService: AuthService) { }

  ngOnInit() {
    this.contentService.getContents().subscribe(data => {
      this.contents = data;
    });
    this.isAdmin = this.authService.isAdminUser;
  }

  deleteContent(id: number) {
    this.contentService.deleteContent(id).subscribe(response => {
      this.contents = this.contents.filter(content => content.id !== id);
    });
  }

  editContent(id: number) {
    // Redirigir a la página de edición
    console.log('Editar contenido:', id);
  }
}
