import placeholder from '../honey.svg'
import { DetailsButtons } from '../common/buttons/DetailsButtons'

export function JobDetails() {
  return (
    <div className="bg-slate-900/25 min-h-cover ">
      <header className="flex shadow-cover-divider p-1 mb-2 bg-slate-900/50 items-center">
        <div className="h-16 m-0.5">
          <img src={placeholder} alt="" className="h-full" />
        </div>
        <div className="text-left grow">
          <h2 className="text-left">Job title | Job type</h2>
          <h3 className="text-left">Contact company</h3>
        </div>
        <div>
          <p>New York, NY | Hybrid</p>
          <p>Last Update: 3/7/2022</p>
        </div>
      </header>
      <div className="flex justify-between p-2">
        <p>Open: 3/4/2022</p>
        <p>Applied: 3/5/2022</p>
        <p>Status: Applied</p>
      </div>
      <div className="text-left p-2 shadow-cover-divider">
        <h2>Contact: Alexa Johnston</h2>
        <p className="mb-4">
          <a href="mailto:ajohnston@recruitz.io">ajohnston@recruitz.io</a>
          <span> | </span>
          <a href="tel:702-263-9744">702-263-9744</a>
        </p>
        <p className="mb-4">
          <a href="#">Posting/Company URL</a>
        </p>
        <details>
          <summary>Contact notes</summary>
          <p>
            Ex ipsum voluptate proident est incididunt in. Ullamco in dolore ad enim et nostrud Lorem esse officia ea.
            Minim elit nisi qui ex fugiat tempor reprehenderit aute consectetur minim fugiat ipsum irure. Sunt ex ea id
            laborum sunt velit nulla ea esse fugiat excepteur amet reprehenderit. Dolor voluptate do velit ad tempor
            consequat voluptate cillum magna veniam. Mollit nisi excepteur nostrud ut. Velit labore reprehenderit
            reprehenderit duis ad sunt in sit laboris.
          </p>
        </details>
      </div>
      <hr className="border-slate-600" />
      <div className="p-2 shadow-cover-divider text-left">
        <details open>
          <summary>Description</summary>
          <p>
            Excepteur minim est veniam sint sunt dolore aliquip voluptate non ut est aliqua. Culpa aliquip velit
            adipisicing sunt. Nostrud deserunt esse qui velit duis do in qui sunt esse tempor. Tempor aliquip commodo
            nisi aliqua dolore labore. Nulla voluptate qui magna elit tempor. Culpa adipisicing nisi commodo aliquip eu
            mollit eu deserunt.
          </p>
          <p>
            Excepteur minim est veniam sint sunt dolore aliquip voluptate non ut est aliqua. Culpa aliquip velit
            adipisicing sunt. Nostrud deserunt esse qui velit duis do in qui sunt esse tempor. Tempor aliquip commodo
            nisi aliqua dolore labore. Nulla voluptate qui magna elit tempor. Culpa adipisicing nisi commodo aliquip eu
            mollit eu deserunt.
          </p>
        </details>
      </div>
      <hr className="border-slate-600" />
      <div className="p-2 shadow-cover-divider text-left">
        <details open>
          <summary>Notes</summary>
          <p>
            Ex ipsum voluptate proident est incididunt in. Ullamco in dolore ad enim et nostrud Lorem esse officia ea.
            Minim elit nisi qui ex fugiat tempor reprehenderit aute consectetur minim fugiat ipsum irure. Sunt ex ea id
            laborum sunt velit nulla ea esse fugiat excepteur amet reprehenderit. Dolor voluptate do velit ad tempor
            consequat voluptate cillum magna veniam. Mollit nisi excepteur nostrud ut. Velit labore reprehenderit
            reprehenderit duis ad sunt in sit laboris.
          </p>
        </details>
      </div>
      <hr className="border-slate-600" />
      <DetailsButtons />
    </div>
  )
}

/*
t.string "title"
t.string "job_type"
t.string "company"
t.string "location"
t.string "is_remote"
t.string "status"
t.string "posting_url"
t.string "logo_url"
t.date "date_posted"
t.string "description"
t.bigint "user_id", null: false
  ##if updated is null use created
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
t.date "date_applied"
t.bigint "contact_id"
t.text "notes"
*/
