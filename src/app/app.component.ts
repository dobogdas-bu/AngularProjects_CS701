import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Part1Component,Part2Component, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CS701-HW4-Bogdas';
}
