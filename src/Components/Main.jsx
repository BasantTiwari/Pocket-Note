// import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-note">
    <img  className="no-active-note-img" src="pocketnoteimg.png" alt="image" />
    <h2>Pocket Notes</h2>
    <p>Send and receive messages without keeping your phone online.</p>
    <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    <footer>
      <img className="lock-img" src="lock.png" alt="lock" />
      end-to-end encrypted</footer>
    </div>

  return (
    <div className="app-main">
      <div className="main-nav">
          <div className="title-logo-2">
            {activeNote.title.slice(0,2)}
          </div>
         <p className="preview-title">{activeNote.title}</p>
      </div>
    <div className="app-main-note-preview">
        
        <div className="markdown-preview">
          {activeNote.body}
        </div>
      </div>

      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Add Title to Note"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      
    </div>
  );
};

export default Main;