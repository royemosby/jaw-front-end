import { Button } from '../common/buttons/Button'

export function User() {
  return (
    <div className=" w-cover min-h-cover max-w-5xl">
      <header className="bg-slate-900/50 shadow-cover-divider p-1 mb-2">
        <h2>Account info</h2>
        <h3>Username: royemosby</h3>
        <h3>Email: roy.e.mosby@gmail.com</h3>
      </header>
      <div>
        <h2>Jobs summaries</h2>
        <div className="grid grid-cols-2 content-center max-w-xs m-auto shadow-cover-divider p-1 mb-2">
          <div>Total</div>
          <div>42</div>
          <div>New</div>
          <div>8</div>
          <div>Applied</div>
          <div>4</div>
          <div>Interviewing</div>
          <div>2</div>
          <div>Offer</div>
          <div>3</div>
          <div>Accepted</div>
          <div>0</div>
          <div>Rejected</div>
          <div>4</div>
          <div>Declined</div>
          <div>5</div>
          <div>Closed</div>
          <div>9</div>
        </div>
      </div>
      <div>Perf dash???</div>
      <div className="flex">
        <Button text="Upate Email"></Button>
        <Button text="Upate Password"></Button>
        <Button text="Delete Account"></Button>
      </div>
    </div>
  )
}

/*
"new", "applied", "interviewing", "offer", "accepted", "rejected", "declined", "closed"*/
