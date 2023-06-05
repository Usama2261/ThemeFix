import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications: any[] = []

  constructor() {
    this.notifications = [
      { seen: false, title: 'Notification 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '1 hour ago' },
      { seen: false, title: 'Notification 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '2 hours ago' },
      { seen: false, title: 'Notification 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '2 hours ago' },
      { seen: false, title: 'Notification 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.' , time: '3 hours ago' },
      { seen: false, title: 'Notification 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '3 hours ago' },
      { seen: true, title: 'Notification 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '4 hours ago' },
      { seen: true, title: 'Notification 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '4 days ago' },
      { seen: true, title: 'Notification 8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '4 days ago' },
      { seen: true, title: 'Notification 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl.', time: '2 weeks ago' },
    ]
  }

  ngOnInit(): void {
  }

}
