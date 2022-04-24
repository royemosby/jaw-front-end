# Job Application Wrangler Front-end

## Notes

Max jobs or contacts is each 999. This can be adjusted in zeroPad() in utility functions.

## Todo

### Up next

- [ ] wire forms
- [ ] Job create form
  - [ ] Contact picker
  - [ ] Inline contact creator
- [ ] Contact creator form (modal could be fun)
- [ ] Contact details new Job button
- Change is_remote enum to "In person", "Remote", or "Hybrid"
- Change date formats from xxxx-xx-xx to xx/xx/xxxx
- Active/hover state styles
- Link indicator on card
- block useEffect fetches when resource fully loaded
- Convert not logged in catchall route to redirect
- Contact jobs styling.
- Remove default un/pw from login state
- Refine close button on contact->job->jobDetails (goes to jobs index instead of back)

### Big picture

- Add [trix](https://github.com/basecamp/trix) for job.description/notes and contact.notes (or maybe https://lexical.dev/)
- Keybindings for quick navigation
- Styling
  - button states
  - required field highlights
- form errors handling
