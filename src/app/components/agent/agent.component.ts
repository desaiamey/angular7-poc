import { Component, OnInit } from '@angular/core';

/**
 *  Agent Component - To render the Agent view
 */
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
  public role: string;
  constructor() { }

  /**
   * Life cycle hook
   */
  ngOnInit() {
    this.role = 'Agent';
  }

}
