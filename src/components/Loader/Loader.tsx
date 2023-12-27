import "./Loader.css";

function Loader() {
  return (
    <div id="loader">
      <div className="typewriter loading">
        <span>Please wait...</span>
      </div>
      <div className="code">
        <div className="code-line">
          <span className="purple">import</span>{" "}
          <span className="light-blue">React</span>,{" "}
          <span className="green">{`{ useEffect, useState }`}</span>{" "}
          <span className="purple">from</span>{" "}
          <span className="orange">'react'</span>
          <span className="white">;</span>
        </div>
        <div className="code-line">
          <span className="purple">import</span>{" "}
          <span className="light-blue">Note</span>{" "}
          <span className="purple">from</span>{" "}
          <span className="orange">'../Note/Note'</span>
          <span className="white">;</span>
        </div>
        <div className="code-line">
          <span className="purple">import</span>{" "}
          <span className="green">{`{ NoteInterface, NewNoteInterface }`}</span>{" "}
          <span className="purple">from</span>{" "}
          <span className="orange">'../../Note/Note.d'</span>
          <span className="white">;</span>
        </div>
        <div className="code-line">
          <span className="purple">import</span>{" "}
          <span className="green">{`{ getAllNotes, deleteNote, createNote, editNote }`}</span>{" "}
          <span className="purple">from</span>{" "}
          <span className="orange">'../../services/noteService'</span>
          <span className="white">;</span>
        </div>
        <div className="code-line">
          <span className="purple">import</span>{" "}
          <span className="light-blue">EditNoteModal</span>{" "}
          <span className="purple">from</span>{" "}
          <span className="orange">'../../Modals/EditNoteModal'</span>
          <span className="white">;</span>
        </div>
        <div className="code-line">
          <span className="purple">import</span>{" "}
          <span className="light-blue">NewNoteModal</span>{" "}
          <span className="purple">from</span>{" "}
          <span className="orange">'../../Modals/NewNoteModal'</span>
          <span className="white">;</span>
        </div>
        <div className="code-line">
          <span className="purple">import</span>{" "}
          <span className="orange">'./Board.css'</span>
          <span className="white">;</span>
        </div>
        <div className="code-line">
          <span className="dark-blue">const</span>{" "}
          <span className="yellow">Board</span>
          <span className="gray">:</span>{" "}
          <span className="green">React.FC</span>{" "}
          <span className="white">=</span> <span className="gray">()</span>{" "}
          <span className="white">{'{"=>"}'}</span>{" "}
          <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">[notes, setNotes]</span>{" "}
          <span className="white">=</span>{" "}
          <span className="light-blue">useState</span>
          <span className="white">{`<NoteInterface[]>`}</span>{" "}
          <span className="white">(</span>
          <span className="gray">[]</span>
          <span className="white">);</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">
            [isNewNoteModalOpen, setIsNewNoteModalOpen]
          </span>{" "}
          <span className="white">=</span>{" "}
          <span className="light-blue">useState</span>
          <span className="white">{`<boolean>`}</span>
          <span className="white">(</span>
          <span className="gray">false</span>
          <span className="white">);</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">
            [isEditNoteModalOpen, setIsEditNoteModalOpen]
          </span>{" "}
          <span className="white">=</span>{" "}
          <span className="light-blue">useState</span>
          <span className="white">{`<boolean>`}</span>
          <span className="white">(</span>
          <span className="gray">false</span>
          <span className="white">);</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">[editedNote, setEditedNote]</span>{" "}
          <span className="white">=</span>{" "}
          <span className="light-blue">useState</span>
          <span className="white">{`<NoteInterface | null>`}</span>
          <span className="white">(</span>
          <span className="gray">null</span>
          <span className="white">);</span>
        </div>
        <div className="code-line tab-1">
          <span className="light-blue">useEffect</span>
          <span className="white">{}</span>
        </div>
        <div className="code-line tab-2">
          <span className="light-blue">getAllNotes</span>
          <span className="white">
            ().then((notes){' {"=>"} '}
            {`{`}
          </span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">setNotes</span>
          <span className="white">(notes);</span>
        </div>
        <div className="code-line tab-2">
          <span className="white">{`}});`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="white">{"}"}, []);</span>
        </div>
        <div className="code-line">
          <span className="gray">{`}`}</span>
        </div>
        <div className="code-line">
          <span className="purple">export default</span>{" "}
          <span className="yellow">Board</span>
          <span className="white">;</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">closeNewNoteModal</span>{" "}
          <span className="white">=</span> <span className="gray">()</span>{" "}
          <span className="white">{"=>"}</span>{" "}
          <span className="gray">{`{`}</span>
          <span className="light-blue"> setIsNewNoteModalOpen</span>
          <span className="white">(</span>
          <span className="gray">false</span>
          <span className="white">);</span>
          <span className="gray">{`}`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">openEditNoteModal</span>{" "}
          <span className="white">=</span> <span className="gray">()</span>{" "}
          <span className="white">{"=>"}</span>{" "}
          <span className="gray">{`{`}</span>
          <span className="light-blue"> setIsEditNoteModalOpen</span>
          <span className="white">(</span>
          <span className="gray">true</span>
          <span className="white">);</span>
          <span className="gray">{`}`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">closeEditNoteModal</span>{" "}
          <span className="white">=</span> <span className="gray">()</span>{" "}
          <span className="white">{"=>"}</span>{" "}
          <span className="gray">{`{`}</span>
          <span className="light-blue"> setIsEditNoteModalOpen</span>
          <span className="white">(</span>
          <span className="gray">false</span>
          <span className="white">);</span>
          <span className="light-blue"> setEditedNote</span>
          <span className="white">(</span>
          <span className="gray">null</span>
          <span className="white">);</span>
          <span className="gray">{`}`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">openNewNoteModal</span>{" "}
          <span className="white">=</span> <span className="gray">()</span>{" "}
          <span className="white">{"=>"}</span>{" "}
          <span className="gray">{`{`}</span>
          <span className="light-blue"> setIsNewNoteModalOpen</span>
          <span className="white">(</span>
          <span className="gray">true</span>
          <span className="white">);</span>
          <span className="gray">{`}`}</span>
        </div>

        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">userNotes</span>{" "}
          <span className="white">=</span>{" "}
          <span className="white">notes.map</span>
          <span className="gray">(</span>
          <span className="gray">(</span>
          <span className="light-blue">note</span>
          <span className="gray">)</span> <span className="white">{"=>"}</span>{" "}
          <span className="gray">{`(`}</span>
        </div>
        <div className="code-line tab-2">
          <span className="gray">{`<Note`}</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">key</span>
          <span className="white">={"note._id"}</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">note</span>
          <span className="white">={"note"}</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">onDelete</span>
          <span className="white">
            ={'() {"=>"} deleteNoteHandler(note._id)'}
          </span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">onOpen</span>
          <span className="white">={'() {"=>"} editNoteHandler(note)'}</span>
        </div>
        <div className="code-line tab-2">
          <span className="gray">{`/>`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="gray">{`));`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="dark-blue">const</span>{" "}
          <span className="white">createNoteHandler</span>{" "}
          <span className="white">=</span>{" "}
          <span className="light-blue">async</span>{" "}
          <span className="gray">(</span>
          <span className="light-blue">newNote</span>
          <span className="gray">:</span>{" "}
          <span className="green">NewNoteInterface</span>
          <span className="gray">)</span> <span className="white">{"=>"}</span>{" "}
          <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-2">
          <span className="light-blue">try</span>{" "}
          <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-3">
          <span className="dark-blue">const</span>{" "}
          <span className="white">createdNote</span>{" "}
          <span className="white">=</span>{" "}
          <span className="light-blue">await</span>{" "}
          <span className="light-blue">createNote</span>
          <span className="gray">(</span>
          <span className="light-blue">newNote</span>
          <span className="gray">);</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">setNotes</span>
          <span className="gray">(</span>
          <span className="gray">(</span>
          <span className="light-blue">prevNotes</span>
          <span className="gray">)</span> <span className="white">{"=>"}</span>{" "}
          <span className="gray">[</span>
          <span className="gray">...</span>
          <span className="light-blue">prevNotes</span>
          <span className="gray">,</span>{" "}
          <span className="light-blue">createdNote</span>
          <span className="gray">]</span>
          <span className="gray">);</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">closeNewNoteModal</span>
          <span className="gray">();</span>
        </div>
        <div className="code-line tab-2">
          <span className="gray">{`}`}</span>{" "}
          <span className="light-blue">catch</span>{" "}
          <span className="gray">(</span>
          <span className="light-blue">error</span>
          <span className="gray">)</span> <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">console.error</span>
          <span className="gray">(</span>
          <span className="white">"Error creating note:",</span>{" "}
          <span className="light-blue">error</span>
          <span className="gray">);</span>
        </div>
        <div className="code-line tab-2">
          <span className="gray">{`}`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="gray">{`};`}</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">setNotes</span><span className="gray">(</span><span className="gray">(</span><span className="light-blue">prevNotes</span><span className="gray">)</span> <span className="white">{'=>'}</span> <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-4">
          <span className="gray">return</span> <span className="gray">prevNotes.map</span><span className="gray">{'('}</span><span className="gray">(</span><span className="light-blue">note</span><span className="gray">)</span> <span className="white">{'=>'}</span> <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-5">
          <span className="gray">if</span> <span className="gray">(</span><span className="light-blue">note</span><span className="gray">.</span><span className="light-blue">_id</span> <span className="white">===</span> <span className="light-blue">editedNote</span><span className="gray">.</span><span className="light-blue">_id</span><span className="gray">)</span> <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-6">
          <span className="gray">return</span> <span className="gray">{`{ ...note, ...editedNote }`}</span><span className="gray">;</span>
        </div>
        <div className="code-line tab-5">
          <span className="gray">{`}`}</span> <span className="gray">else</span> <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-6">
          <span className="gray">return</span> <span className="light-blue">note</span><span className="gray">;</span>
        </div>
        <div className="code-line tab-5">
          <span className="gray">{`}`}</span>
        </div>
        <div className="code-line tab-4">
          <span className="gray">{`};`}</span>
        </div>
        <div className="code-line tab-3">
          <span className="gray">{`});`}</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">closeEditNoteModal</span><span className="gray">();</span>
        </div>
        <div className="code-line tab-2">
          <span className="gray">{`}`}</span> <span className="light-blue">catch</span> <span className="gray">(</span><span className="light-blue">error</span><span className="gray">)</span> <span className="gray">{`{`}</span>
        </div>
        <div className="code-line tab-3">
          <span className="light-blue">console.error</span><span className="gray">(</span><span className="white">"Error editing note:",</span> <span className="light-blue">error</span><span className="gray">);</span>
        </div>
        <div className="code-line tab-2">
          <span className="gray">{`}`}</span>
        </div>
        <div className="code-line tab-1">
          <span className="gray">{`};`}</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
