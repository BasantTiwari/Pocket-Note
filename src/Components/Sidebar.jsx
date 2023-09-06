const Sidebar = ({
    notes,
    onAddNote,
    // showCreateGroupDialog,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1> Pocket Notes</h1>
          <button onClick={onAddNote}>+ Create Notes Group</button>
          {/* I have made a change here removing onAddNote and replacing it with showCreateGroupDialog */}
          {/* <button onClick={() => showCreateGroupDialog()}>Create Notes Group</button> */}

        </div>
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <div className="title-logo">
                  {title.slice(0,2)}
                </div>
                <strong>{title}</strong>
                <button className="delete-btn" onClick={(e) => onDeleteNote(id)}>Delete</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;