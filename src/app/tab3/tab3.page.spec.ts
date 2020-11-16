import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AlbumsPage } from './tab3.page';

describe('Tab3Page', () => {
  let component: AlbumsPage;
  let fixture: ComponentFixture<AlbumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
