@extends 'has_footer.kts'

override fun getTitle(@args) = locale["modules.sectionNames.commands"]

override fun DIV.generateContent(@args) {
    style {
        unsafe {
            raw(""".fancy-table tr {
  height: 40px;
  text-align: center;
}

.fancy-table {
  width: 100%;
}

.fancy-table tbody {
  border-top: 1px solid #e7e9ea;
}

.fancy-table th {
  font-weight: 600;
  color: #29a6fe;
  padding: 10px;
}

.fancy-table th, td {
  padding: 10px;
  border-bottom: solid 1px #0000001a;
}""")
        }
    }
    div {
        id = "commands"
    }
}