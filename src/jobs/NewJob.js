import { JobForm } from './JobForm'
import { CreateButtons } from '../common/buttons/CreateButtons'

export function NewJob() {
  return (
    <div>
      <h1>New Job</h1>
      <JobForm>
        <CreateButtons></CreateButtons>
      </JobForm>
    </div>
  )
}
