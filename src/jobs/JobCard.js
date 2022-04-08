import { Card } from '../common/Card'
import placeholder from '../honey.svg'

export function JobCard() {
  return (
    <Card>
      <div className="flex">
        <div className="h-16 m-0.5">
          <img src={placeholder} alt="" className="h-full" />
        </div>
        <div className="text-left grow">
          <h2 className="text-left">Job title</h2>
          <h3 className="text-left">Contact company</h3>
        </div>
        <div>
          <p>New York, NY | Hybrid</p>
        </div>
      </div>
      <p className="text-left">
        Marcellus Wallace |{' '}
        <a href="#">
          mwallace@pulp.co | <a href="#">334-445-5566</a>
        </a>
      </p>
      <div className="flex justify-between">
        <p>Open: 3/4/2022</p>
        <p>Applied: 3/5/2022</p>
        <p>Status: Applied</p>
      </div>
    </Card>
  )
}

/*
create_table "jobs", force: :cascade do |t|
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "date_applied"
    t.bigint "contact_id"
    t.text "notes"
    t.index ["contact_id"], name: "index_jobs_on_contact_id"
    t.index ["user_id"], name: "index_jobs_on_user_id"
  end
*/
