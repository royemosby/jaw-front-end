# Job Application Wrangler Front-end

## Notes

Max jobs or contacts is each 999. This can be adjusted in zeroPad() in utility functions.

## Todo

### Develop

- [ ] forms
  - [x] contact forms
    - [x] create
      - [x] wire
      - [x] actions
  - [ ] job forms
    - [x] create
      - [x] wire
      - [x] actions
      - [x] contact picker
      - [ ] contact maker
    - [ ] edit
      - [x] wire
      - [x] actions
      - [x] disable delete with contact FK
      - [x] contact picker
      - [ ] contact maker
- [ ] set adapters to pull jwt directly from the store (simplify fetch)
- [ ] handling validation failures (see validations.md for notes)
  - [ ] jobs
  - [ ] contacts
- [x] details
  - [x] contacts
  - [x] jobs
    - [x] disable delete with contact FK
- [ ] index pages
  - [x] contacts
  - [x] jobs
  - [ ] user
- [ ] backend updates
  - [ ] remove fk constraint and remove fk's
    - [ ] contact
    - [ ] job
    - [ ] update front-end state
  - [ ] Change is_remote enum to "In person", "Remote", or "Hybrid"
  - [ ] Change contact.url to contact.social_url
    - [ ] un-alias imported config urls in ContactDetails, ContactCard
  - [ ] Change date formats from xxxx-xx-xx to xx/xx/xxxx
  - [ ] CORS errors arises from a couple individual resource fetches after server restarted. Does not happen when logged out then log back in. Troubleshoot.

### Style tweaks

- [ ] Active/hover state styles
- [ ] Link indicator on card
- [ ] improve disabled button ux

### QA/QC

- [ ] Remove default un/pw from login stated

### Big picture

- Add [trix](https://github.com/basecamp/trix) for job.description/notes and contact.notes (or maybe https://lexical.dev/)
- consider active notes input on details view
- Keybindings for quick navigation
- Styling
  - button states
  - required field highlights
- form errors handling
- state persistence in localStorage

### Questions

- Access to store outside of component for adapter configs?
- How to use dialog element properly?
