import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutSitePage } from './about-site.page';

describe('AboutSitePage', () => {
  let component: AboutSitePage;
  let fixture: ComponentFixture<AboutSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
