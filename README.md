# Job Application Wrangler Front-end

## Notes

Max jobs or contacts is each 999. This can be adjusted in zeroPad() in utility functions.

## Todo

### Develop

- [ ] user form
- [ ] new user flow
- [ ] API updates
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
- [ ] Link indicator on contact's name if link

### QA/QC

- [ ] Remove default un/pw from login stated

### Big picture

- Add [trix](https://github.com/basecamp/trix) for job.description/notes and contact.notes (or maybe <https://lexical.dev/>)
- consider active notes input on details view
- Keybindings for quick navigation
- Styling
  - button states
  - required field highlights
- form errors handling
- state persistence in localStorage
- reloads on each index clears errors when using direct navigation instead of cancel. Also resolves relation changes between jobs and contacts. Going to downgrade any work on caching strategies

### Questions

- Access to store outside of component for adapter configs?
- How to use dialog element properly?
