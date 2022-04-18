import { Card } from '../common/Card'
import { ConditionalLinkWrapper } from '../common/conditionalLinkWrapper'

export function ContactCard({
  first_name,
  last_name,
  contact_type,
  email,
  url,
  phone,
  created_at,
  updated_at,
}) {
  return (
    <Card>
      <p>
        <ConditionalLinkWrapper link={url} condition={!!url}>
          {first_name} {last_name}{' '}
        </ConditionalLinkWrapper>
        | <a href={`mailto:${email}`}>{email}</a> |{' '}
        <a href={`tel:${phone}`}>{phone}</a>
      </p>
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
