import React from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Users,
  Zap,
} from "lucide-react";

const metrics = [
  { label: "Tasks completed", value: "128", change: "+12.8%", up: true, note: "vs. last month", icon: CheckCircle2, tone: "blue" },
  { label: "In progress", value: "24", change: "+4.2%", up: true, note: "vs. last month", icon: Activity, tone: "purple" },
  { label: "Team productivity", value: "86%", change: "+8.1%", up: true, note: "vs. last month", icon: Zap, tone: "green" },
  { label: "Overdue tasks", value: "7", change: "-2.4%", up: false, note: "vs. last month", icon: CalendarDays, tone: "orange" },
];

const tasks = [
  { name: "Refresh onboarding flow", project: "Website redesign", owner: "AM", due: "Today", status: "In progress", tone: "progress" },
  { name: "Review Q4 campaign assets", project: "Marketing", owner: "SK", due: "Oct 30", status: "In review", tone: "review" },
  { name: "Update API documentation", project: "Platform", owner: "JL", due: "Oct 31", status: "Completed", tone: "complete" },
  { name: "Prepare sprint retrospective", project: "Team operations", owner: "RM", due: "Nov 02", status: "In progress", tone: "progress" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#" aria-label="FlowTrack home">
        <span className="brand-mark"><Activity size={19} strokeWidth={2.6} /></span>
        <span>Flow<span className="brand-accent">Track</span></span>
      </a>

      <div className="workspace-switcher">
        <div className="workspace-avatar">FT</div>
        <div className="workspace-copy">
          <strong>FlowTrack Studio</strong>
          <span>Free workspace</span>
        </div>
        <ChevronDown size={16} />
      </div>

      <p className="nav-label">WORKSPACE</p>
      <nav className="nav-list" aria-label="Main navigation">
        <a className="nav-item active" href="#"><LayoutDashboard size={18} /> Overview</a>
        <a className="nav-item" href="#"><ClipboardList size={18} /> My tasks <span className="nav-count">8</span></a>
        <a className="nav-item" href="#"><FolderKanban size={18} /> Projects</a>
        <a className="nav-item" href="#"><Users size={18} /> Team</a>
      </nav>

      <p className="nav-label second-label">PREFERENCES</p>
      <nav className="nav-list" aria-label="Preferences">
        <a className="nav-item" href="#"><Settings2 size={18} /> Settings</a>
        <a className="nav-item" href="#"><CircleHelp size={18} /> Help center</a>
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon"><Zap size={16} /></div>
          <strong>Make more progress</strong>
          <p>Unlock advanced reports for your team.</p>
          <button className="upgrade-button">Explore Pro</button>
        </div>
        <div className="profile-row">
          <div className="profile-avatar">AM</div>
          <div className="profile-copy"><strong>Alex Morgan</strong><span>Product designer</span></div>
          <MoreHorizontal size={18} />
        </div>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div className="breadcrumb"><span>Workspace</span><span className="crumb-divider">/</span><strong>Overview</strong></div>
      <div className="topbar-actions">
        <label className="search-box">
          <Search size={16} />
          <input aria-label="Search workspace" placeholder="Search anything..." />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button" aria-label="Notifications"><Bell size={18} /><i /></button>
        <div className="header-avatar">AM</div>
      </div>
    </header>
  );
}

function MetricCard({ item }) {
  const Icon = item.icon;
  const ChangeIcon = item.up ? ArrowUpRight : ArrowDownRight;
  return (
    <article className="metric-card">
      <div className="metric-card-top">
        <span className={`metric-icon ${item.tone}`}><Icon size={18} /></span>
        <button className="more-button" aria-label={`More options for ${item.label}`}><MoreHorizontal size={19} /></button>
      </div>
      <p className="metric-label">{item.label}</p>
      <div className="metric-value-row">
        <strong className="metric-value">{item.value}</strong>
        <span className={`metric-change ${item.up ? "positive" : "negative"}`}><ChangeIcon size={14} />{item.change}</span>
      </div>
      <span className="metric-note">{item.note}</span>
    </article>
  );
}

function RecentTasks() {
  return (
    <section className="panel tasks-panel">
      <div className="panel-heading">
        <div><h2>Recent tasks</h2><p>Keep track of what your team is working on.</p></div>
        <button className="secondary-button">View all tasks <ArrowUpRight size={15} /></button>
      </div>
      <div className="table-scroll">
        <table>
          <thead><tr><th>TASK</th><th>PROJECT</th><th>ASSIGNEE</th><th>DUE DATE</th><th>STATUS</th><th></th></tr></thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.name}>
                <td><span className="task-title">{task.name}</span></td>
                <td><span className="project-name">{task.project}</span></td>
                <td><span className="assignee">{task.owner}</span></td>
                <td><span className="due-date">{task.due}</span></td>
                <td><span className={`status-pill ${task.tone}`}>{task.status}</span></td>
                <td><button className="more-button" aria-label={`More options for ${task.name}`}><MoreHorizontal size={18} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-column">
        <Header />
        <main className="dashboard-content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">TUESDAY, OCTOBER 28, 2026</p>
              <h1>Good afternoon, Alex <span>✦</span></h1>
              <p className="page-subtitle">Here's what's happening with your workspace today.</p>
            </div>
            <button className="primary-button"><Plus size={17} /> Create new task</button>
          </section>

          <section className="metrics-section" aria-labelledby="metrics-heading">
            <div className="section-heading"><h2 id="metrics-heading">Workspace overview</h2><button className="date-filter"><CalendarDays size={15} /> Last 30 days <ChevronDown size={14} /></button></div>
            <div className="metric-grid">
              {metrics.map((item) => <MetricCard key={item.label} item={item} />)}
            </div>
          </section>

          <section className="insight-banner">
            <div className="insight-symbol"><Zap size={20} /></div>
            <div className="insight-copy"><strong>Your team is on a roll!</strong><p>You completed 18% more tasks this month. Keep the momentum going.</p></div>
            <button className="banner-link">See team insights <ArrowUpRight size={15} /></button>
          </section>

          <RecentTasks />
          <footer className="page-footer"><span>© 2026 FlowTrack</span><span>Made for focused teams <span className="footer-heart">♥</span></span></footer>
        </main>
      </div>
    </div>
  );
}

export default App;
