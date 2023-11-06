---
sidebar_position: 8
---

# Known Issues

## Mission File Parsing

### Trigger actions with Windows pathnames may have quotations stripped

If you are importing .lua scripts using a `dofile()` call or similar, Frag Orders may strip your quotations, causing your lua imports to break. This is due to an issue with escaping `\` characters in the Frag Orders .miz parsing logic.

To work around this issue, remove those imports, or replace the `"` missing from the LUA import action. 

### Backticks in group/unit/livery names may get stripped

Group, unit, and livery names with backtick characters may not be preserved when the updated .miz file is downloaded.

To work around this issue, remove any backticks from your Group, unit, and livery names (this seems to crop up most with livery names).