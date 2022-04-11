import { Card } from '../common/Card'

export function ContactCard() {
  return (
    <Card>
      <p>Joseph Smith | jsmith@oi.io | 334-334-3335</p>
    </Card>
  )
}

/*
t.string "first_name"
t.string "last_name"
t.string "contact_type"
t.string "email"
t.string "url"
t.string "phone"
t.text "notes"
t.bigint "user_id", null: false
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
*/
