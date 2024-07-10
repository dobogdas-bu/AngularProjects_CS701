import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TokenizerPipe } from './tokenizer.pipe';
@Component({
  selector: 'app-part2',
  standalone: true,
  imports: [FormsModule, TokenizerPipe],
  templateUrl: './part2.component.html',
  styleUrl: './part2.component.css'
})
export class Part2Component {
default :string | undefined
option :string | undefined
input :string | undefined
delimiter :string | undefined
}
