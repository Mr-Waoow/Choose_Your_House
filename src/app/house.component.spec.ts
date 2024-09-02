import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HouseComponent } from './house.component';

describe('HouseComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HouseComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HouseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Choose_Your_House'`, () => {
    const fixture = TestBed.createComponent(HouseComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Choose_Your_House');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HouseComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Choose_Your_House');
  });
});
