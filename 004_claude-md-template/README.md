# CLAUDE.md Starter Template

A minimal configuration file for Claude Code.

## Installation

### Option 1: Project-Specific (Recommended)
Copy `CLAUDE.md` to your project root:
```bash
cp CLAUDE.md /path/to/your/project/
```

### Option 2: Global Configuration
Copy to your home directory for all projects:
```bash
cp CLAUDE.md ~/.claude/CLAUDE.md
```

## Customization

Edit the file to match your preferences:

- **Code Style**: Change language, framework, or style rules
- **Workflow**: Add your CI/CD or testing requirements
- **Documentation**: Specify your documentation standards
- **Agent Usage**: Define when to use parallel processing

## How It Works

Claude Code automatically reads `CLAUDE.md` from:
1. Current project directory (highest priority)
2. `~/.claude/CLAUDE.md` (global fallback)

The instructions guide Claude's behavior for your specific workflow.

## Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [AIPaths Academy](https://www.aipaths.academy)
