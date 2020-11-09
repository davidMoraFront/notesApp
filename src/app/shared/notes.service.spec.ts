import { TestBed } from '@angular/core/testing';

import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;
  const mockResponse = [
    {
      title: 'first test title',
      body: 'first test body',
    },
    {
      title: 'second test title',
      body: 'second test body',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Service of a note', () => {
    beforeEach(() => {
      service.add(mockResponse[0]);
    });

    it('should add note', () => {
      expect(service['notes'][0].title).toEqual('first test title');
      expect(service['notes'][0].body).toEqual('first test body');
    });

    it('should get a note', () => {
      expect(service.get(0).title).toEqual('first test title');
      expect(service.get(0).body).toEqual('first test body');
    });

    it('should get an id of a note', () => {
      expect(service.getId(service['notes'][0])).toEqual(0);
    });

    it('should update a note', () => {
      service.update(0, 'new first test title', 'new first test body');
      expect(service['notes'][0].title).toEqual('new first test title');
      expect(service['notes'][0].body).toEqual('new first test body');
      service.update(0, 'first test title', 'first test body');
    });

    it('should delete a note', () => {
      service.delete(0);
      expect(service.get(0)).toBeUndefined();
    });
  });

  describe('Service of all notes', () => {
    it('should get all note', () => {
      mockResponse.forEach((note) => service.add(note));
      expect(service.getAll()).toEqual(mockResponse);
    });
  });
});
