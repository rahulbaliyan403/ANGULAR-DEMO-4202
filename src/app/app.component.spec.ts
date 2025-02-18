import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApplicationModule } from '@angular/core';

describe('AppComponent', () => {
  
  beforeEach(async() =>{

    TestBed.configureTestingModule({
      imports : [ApplicationModule],
      declarations : [AppComponent],
      providers : []

    })

  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ANGULAR-DEMO-4202' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ANGULAR-DEMO-4202');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('ANGULAR-DEMO-4202');
  });

});
