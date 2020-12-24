import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AduanListingPage } from './aduan-listing.page';

describe('AduanListingPage', () => {
  let component: AduanListingPage;
  let fixture: ComponentFixture<AduanListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AduanListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
