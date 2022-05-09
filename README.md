# Job Application Wrangler Front-end

## Notes

Max jobs or contacts is each 999. This can be adjusted in zeroPad() in utility functions.

## Todo

### Develop

- [ ] set adapters to pull jwt directly from the store (simplify fetch)
- [ ] handling validation failures (see validations.md for notes)
  - [ ] jobs
  - [ ] contacts
- [ ] index pages
  - [x] contacts
  - [x] jobs
  - [ ] user
- [ ] caching strategy (leverage fullyLoaded in slices)
  - [ ] prevent reloading every time index is visited
    - [ ] contacts
    - [ ] jobs
    - [ ] user
  - [ ] update contact association on job update
    - [ ] contact that is selected (add jobId)
    - [ ] contact that is de-selected (remove jobId)
- [ ] API updates
  - [ ] Change is_remote enum to "In person", "Remote", or "Hybrid"
  - [ ] Change contact.url to contact.social_url
    - [ ] un-alias imported config urls in ContactDetails, ContactCard
  - [ ] Change date formats from xxxx-xx-xx to xx/xx/xxxx
  - [ ] CORS errors arises from a couple individual resource fetches after server restarted. Does not happen when logged out then log back in. Troubleshoot.
  - [ ] remove fk constraint and remove fk's
    - [ ] contact
    - [ ] job
    - [ ] update front-end state
- [ ] animations/transitions
  - [ ] convert all useEffect fetches into thunks
  - [ ] research animations/transitions

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
