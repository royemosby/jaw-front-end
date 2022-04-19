# Job Application Wrangler Front-end

## Notes

Max jobs or contacts is each 999. This can be adjusted in zeroPad() in utility functions.

## Todo

### Up next

- Normalize redux stores to assist in relational retrieval
  - [ ] Jobs
  - [ ] Contacts
  - [ ] Redo components reliant on Job
  - [ ] Redo components reliant on Contact
- Load contact store if empty on login
- Load job store if empty on login
- Load contacts
  - Link contact's jobs to jobDetails
- Job create form
  - Contact picker
  - Inline contact creator
- Contact creator form
  - !No inline job creator(yet?)
- Change is_remote enum to "In person", "Remote", or "Hybrid"
- Change date formats from xxxx-xx-xx to xx/xx/xxxx
- Active/hover state styles
- Link indicator on card
- Convert not logged in catchall route to redirect

### Big picture

- Add [trix](https://github.com/basecamp/trix) for job.description/notes and contact.notes (or maybe https://lexical.dev/)
- Keybindings for quick navigation
- Styling
  - button states
  - required field highlights
- form errors handling
