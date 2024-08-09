export const shortcuts = {
  keyboardshortcuts: [
    {
      type: "editingcells",
      windshortcut: "Ctrl+C",
      macshortcut: "Command+C",
      description: "Copies the selected cells or content.",
    },
    {
      type: "editingcells",
      windshortcut: "Ctrl+V",
      macshortcut: "Command+V",
      description: "Pastes the copied cells or content.",
    },
    {
      type: "editingcells",
      windshortcut: "Ctrl+Alt+V",
      macshortcut: "Command+Ctrl+V",
      description:
        "Displays the Paste Special dialog box; available only after something has been copied to the clipboard.",
    },
    {
      type: "editingcells",
      windshortcut: "Ctrl+X",
      macshortcut: "Command+X",
      description: "Cuts the selected cells or content.",
    },
    {
      type: "editingcells",
      windshortcut: "Ctrl+F",
      macshortcut: "Command+F",
      description:
        "Displays the Find and Replace dialog, with the Find tab selected.",
    },
    {
      type: "editingcells",
      windshortcut: "Ctrl+H",
      macshortcut: "Command+H",
      description:
        "Displays the Find and Replace dialog, with the Replace tab selected.",
    },
    {
      type: "formattingcells",
      windshortcut: "Ctrl+1",
      macshortcut: "Ctrl+1",
      description: "Displays the format cells dialog box. ",
    },
    {
      type: "formattingcells",
      windshortcut: "Ctrl+B",
      macshortcut: "Command+B",
      description: "Applies or removes bold formatting. ",
    },
    {
      type: "formattingcells",
      windshortcut: "Ctrl+U",
      macshortcut: "Command+U",
      description: "Applies or removes underline formatting. ",
    },
    {
      type: "formattingcells",
      windshortcut: "Ctrl+I",
      macshortcut: "Command+I",
      description: "Applies or removes italic formatting.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+Spacebar",
      macshortcut: "Ctrl+Spacebar",
      description: "Selects an entire worksheet column.",
    },
    {
      type: "selectingcells",
      windshortcut: "Shift+Spacebar",
      macshortcut: "Shift+Spacebar",
      description: "Selects an entire worksheet row.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+Shift+Up Arrow",
      macshortcut: "Ctrl+Shift+Up Arrow",
      description:
        "Extends the selection of cells to the last cell at the top edge of the current data region.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+Shift+Down Arrow",
      macshortcut: "Ctrl+Shift+Down Arrow",
      description:
        "Extends the selection of cells to the last cell at the bottom edge of the current data region.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+Shift+Right Arrow",
      macshortcut: "Ctrl+Shift+Right Arrow",
      description:
        "Extends the selection of cells to the last cell at the right edge of the current data region.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+Shift+Left Arrow",
      macshortcut: "Ctrl+Shift+Left Arrow",
      description:
        "Extends the selection of cells to the last cell at the left edge of the current data region.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+Shift+Home",
      macshortcut: "Fn+Ctrl+Right Arrow",
      description:
        "Extends the selection of cells up and to the left, to cell A1.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+Shift+End",
      macshortcut: "Fn+Ctrl+Shift+Right Arrow",
      description:
        "Extends the selection of cells down and to the right, to the last used cell in the worksheet.",
    },
    {
      type: "selectingcells",
      windshortcut: "Ctrl+A",
      macshortcut: "Command+A",
      description:
        "Selects all the cells in the current data region of the worksheet.",
    },
    {
      type: "editingdata",
      windshortcut: "Alt+Enter",
      macshortcut: "Ctrl+Option+Return",
      description: "Moves the cursor to a new line in the cell being edited.",
    },
    {
      type: "editingdata",
      windshortcut: "Shift+Right Arrow	",
      macshortcut: "Shift+Right Arrow	",
      description: "Selects a character to the right of cursor.",
    },
    {
      type: "editingdata",
      windshortcut: "Shift+Left Arrow",
      macshortcut: "Shift+Left Arrow",
      description: "Selects a character to the left of cursor.",
    },
    {
      type: "editingdata",
      windshortcut: "Alt+Enter",
      macshortcut: "Ctrl+Option+Return",
      description: "Moves the cursor to a new line in the cell being edited.",
    },
    {
      type: "editingdata",
      windshortcut: "F2",
      macshortcut: "Control+U",
      description: "Edits (places the cursor in) the active cell.",
    },
    {
      type: "editingdata",
      windshortcut: "F9",
      macshortcut: "Fn+F9",
      description: "Calculates all worksheets in all open workbooks.",
    },
    {
      type: "editingdata",
      windshortcut: "F4",
      macshortcut: "F4",
      description:
        "Cycles through combinations of absolute and relative references for the selected cell reference.",
    },
    {
      type: "navigatingworksheets",
      windshortcut: "Ctrl+Home",
      macshortcut: "Fn+Ctrl+Left Arrow",
      description: "Navigates to cell A1 of the given worksheet.",
    },
    {
      type: "navigatingworksheets",
      windshortcut: "Ctrl+Right Arrow	",
      macshortcut: "Ctrl+Right Arrow",
      description:
        "Navigates to the right edge of the current row, in the current data region.",
    },
    {
      type: "navigatingworksheets",
      windshortcut: "Ctrl+Left Arrow",
      macshortcut: "Ctrl+Left Arrow	",
      description:
        "Navigates to the left edge of the current row, in the current data region.",
    },
    {
      type: "navigatingworksheets",
      windshortcut: "Ctrl+Up Arrow",
      macshortcut: "Ctrl+Up Arrow",
      description:
        "Navigates to the top edge of the current column, in the current data region.",
    },
    {
      type: "navigatingworksheets",
      windshortcut: "Ctrl+Down Arrow",
      macshortcut: "Ctrl+Down Arrow",
      description:
        "Navigates to the bottom edge of the current column, in the current data region.",
    },
    {
      type: "navigatingworksheets",
      windshortcut: "Ctrl+End",
      macshortcut: "Ctrl+End",
      description: "Navigates to the last cell used in the current worksheet.",
    },
    {
      type: "worksheets",
      windshortcut: "Ctrl+O",
      macshortcut: "Command+O",
      description: "Displays the menu for opening a workbook.",
    },
    {
      type: "worksheets",
      windshortcut: "Ctrl+N",
      macshortcut: "Command+N",
      description: "Creates a new workbook.",
    },
    {
      type: "worksheets",
      windshortcut: "Ctrl+W",
      macshortcut: "Command+W",
      description: "Closes the active workbook window.",
    },
    {
      type: "worksheets",
      windshortcut: "Ctrl+S",
      macshortcut: "Command+S	",
      description: "Saves the current workbook.",
    },
    {
      type: "worksheets",
      windshortcut: "Shift+F11",
      macshortcut: "Fn+Shift+F11",
      description: "Inserts a new worksheet.",
    },
    {
      type: "miscellaneous",
      windshortcut: "Ctrl+Z",
      macshortcut: "Command+Z",
      description: "Undo last action.",
    },
    {
      type: "miscellaneous",
      windshortcut: "Ctrl+Y",
      macshortcut: "Command+Y",
      description: "Redo last action.",
    },
    {
      type: "miscellaneous",
      windshortcut: "Ctrl+Shift+L",
      macshortcut: "Command+Shift+F",
      description: "Adds or removes Autofilters from the current data region.",
    },
    {
      type: "miscellaneous",
      windshortcut: "Ctrl+T",
      macshortcut: "Ctrl+T",
      description:
        "Inserts a table based on either the current selection or the current data region.",
    },
    {
      type: "miscellaneous",
      windshortcut: "Alt+F11",
      macshortcut: "Fn+Option+F11",
      description: "Displays the VBA Editor.",
    },
    {
      type: "miscellaneous",
      windshortcut: "F1",
      macshortcut: "F1",
      description: "Displays the Excel Help task pane.",
    },
    {
      type: "miscellaneous",
      windshortcut: "F7",
      macshortcut: "F7",
      description: "Displays the Spellcheck dialog box.",
    },
  ],
};
