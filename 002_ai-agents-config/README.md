# AI Agents Configuration Pack - Setup Guide

Welcome to the AI Agents Configuration Pack! This guide will help you deploy autonomous AI agents for your development workflow.

## What's Inside

```
002_ai-agents-config/
├── agents/                  # Agent configuration files
│   ├── code-review.json     # Code review agent
│   ├── documentation.json   # Documentation agent
│   ├── testing.json         # Testing agent
│   ├── debugging.json       # Debugging agent
│   ├── refactoring.json     # Refactoring agent
│   └── security.json        # Security audit agent
├── examples/                # Example workflows
│   ├── github-integration/
│   ├── gitlab-integration/
│   └── slack-notifications/
├── package.json            # Dependencies
├── .env.example            # Environment template
└── README.md               # This file
```

## Quick Start

### Prerequisites

- [ ] **Node.js 18+** installed
- [ ] **OpenAI or Anthropic API key**
- [ ] **GitHub/GitLab access token** (optional, for integrations)
- [ ] **Basic understanding of AI agents**

### Installation

1. **Extract the Package**
   ```bash
   unzip ai-agents-config.zip -d ~/ai-agents
   cd ~/ai-agents
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   ```bash
   # Required
   OPENAI_API_KEY=sk-proj-...
   ANTHROPIC_API_KEY=sk-ant-...

   # Optional - for integrations
   GITHUB_TOKEN=ghp_...
   GITLAB_TOKEN=glpat-...
   SLACK_WEBHOOK_URL=https://hooks.slack.com/...
   ```

4. **Test Configuration**
   ```bash
   npm run test-config
   ```

5. **Deploy Your First Agent**
   ```bash
   npm run deploy code-review
   ```

## Agent Descriptions

### 1. Code Review Agent (`code-review.json`)

**Purpose**: Automatically reviews pull requests for code quality, bugs, and best practices.

**Capabilities**:
- Analyzes code changes in PRs
- Checks for common bugs and anti-patterns
- Enforces coding standards
- Provides specific improvement suggestions
- Posts comments directly to GitHub/GitLab

**When to Use**: Enable for all repositories to get automated code reviews.

**Configuration Options**:
```json
{
  "maxComplexity": 10,
  "enforceTypes": true,
  "checkSecurity": true,
  "autoFix": false
}
```

### 2. Documentation Agent (`documentation.json`)

**Purpose**: Generates and maintains comprehensive documentation from your codebase.

**Capabilities**:
- Creates README files
- Generates API documentation
- Writes inline code comments
- Updates docs when code changes
- Supports multiple formats (MD, JSDoc, etc.)

**When to Use**: Run weekly or on significant code changes.

**Configuration Options**:
```json
{
  "formats": ["markdown", "jsdoc"],
  "includeExamples": true,
  "updateFrequency": "weekly"
}
```

### 3. Testing Agent (`testing.json`)

**Purpose**: Automatically generates unit and integration tests for your code.

**Capabilities**:
- Creates unit tests for new functions
- Generates integration test suites
- Identifies edge cases
- Maintains test coverage standards
- Updates tests when code changes

**When to Use**: Run on every commit to maintain test coverage.

**Configuration Options**:
```json
{
  "testFramework": "jest",
  "minCoverage": 80,
  "includeEdgeCases": true
}
```

### 4. Debugging Agent (`debugging.json`)

**Purpose**: Analyzes errors and provides debugging guidance.

**Capabilities**:
- Analyzes error messages and stack traces
- Suggests root causes
- Provides step-by-step debugging steps
- Searches for similar past issues
- Learns from resolved bugs

**When to Use**: Trigger manually when encountering bugs or errors.

**Configuration Options**:
```json
{
  "searchHistory": true,
  "provideFixes": true,
  "verbosity": "detailed"
}
```

### 5. Refactoring Agent (`refactoring.json`)

**Purpose**: Identifies code improvements and proposes refactorings.

**Capabilities**:
- Detects code duplication
- Measures code complexity
- Suggests design pattern improvements
- Identifies outdated dependencies
- Creates refactoring plans

**When to Use**: Run monthly or before major releases.

**Configuration Options**:
```json
{
  "maxDuplication": 5,
  "complexityThreshold": 15,
  "suggestPatterns": true
}
```

### 6. Security Audit Agent (`security.json`)

**Purpose**: Scans for security vulnerabilities and enforces best practices.

**Capabilities**:
- Checks for OWASP Top 10 vulnerabilities
- Audits dependency security
- Validates authentication/authorization
- Reviews data handling practices
- Generates security reports

**When to Use**: Run daily or on every PR.

**Configuration Options**:
```json
{
  "checkDependencies": true,
  "owaspChecks": true,
  "generateReports": true
}
```

## Usage Examples

### Example 1: Code Review on Pull Request

```bash
# Manually review a PR
npm run review-pr <PR_NUMBER>

# Or set up automatic reviews via webhook
npm run setup-webhook code-review
```

### Example 2: Generate Documentation

```bash
# Generate docs for current codebase
npm run generate-docs

# Update specific file documentation
npm run update-docs src/components/Button.tsx
```

### Example 3: Run Security Audit

```bash
# Full security scan
npm run security-audit

# Quick dependency check
npm run security-check-deps
```

### Example 4: Generate Tests

```bash
# Generate tests for a file
npm run generate-tests src/utils/helpers.ts

# Generate tests for all new files
npm run generate-tests --new
```

## GitHub Integration

### Setup Webhook

1. Go to your repository settings
2. Navigate to Webhooks → Add webhook
3. Set Payload URL to: `https://your-domain.com/webhook/code-review`
4. Select events: Pull requests, Push
5. Save webhook

### Configure Actions

Create `.github/workflows/ai-agents.yml`:

```yaml
name: AI Agents

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  code-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Code Review Agent
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          npm install
          npm run review-pr ${{ github.event.pull_request.number }}
```

## GitLab Integration

### Setup Pipeline

Create `.gitlab-ci.yml`:

```yaml
code-review:
  stage: review
  script:
    - npm install
    - npm run review-mr $CI_MERGE_REQUEST_IID
  only:
    - merge_requests
  variables:
    OPENAI_API_KEY: $OPENAI_API_KEY
```

## Slack Integration

### Setup Notifications

1. Create a Slack webhook URL
2. Add to `.env`:
   ```
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
   ```

3. Configure notification preferences:
   ```json
   {
     "notifications": {
       "channels": ["#dev", "#code-review"],
       "events": ["review-complete", "security-issue", "test-failure"]
     }
   }
   ```

## Advanced Configuration

### Multi-Agent Workflows

Chain multiple agents together:

```javascript
// workflow.js
const workflow = {
  name: "full-review",
  agents: [
    { agent: "security", blocking: true },
    { agent: "code-review", blocking: true },
    { agent: "testing", blocking: false },
    { agent: "documentation", blocking: false }
  ]
};
```

Run with:
```bash
npm run workflow full-review
```

### Custom Agent Creation

Create a new agent:

```bash
npm run create-agent my-custom-agent
```

Edit `agents/my-custom-agent.json`:

```json
{
  "name": "my-custom-agent",
  "description": "Does something specific",
  "model": "gpt-4-turbo-preview",
  "systemPrompt": "You are an expert at...",
  "tools": ["filesystem", "github"],
  "triggers": ["custom-event"],
  "actions": [
    {
      "type": "analyze",
      "target": "code"
    },
    {
      "type": "comment",
      "target": "pr"
    }
  ]
}
```

## Cost Management

### Monitoring Usage

```bash
# View usage statistics
npm run usage-stats

# Set spending limits
npm run set-limit --daily 10 --monthly 200
```

### Optimizing Costs

1. **Use GPT-3.5 for Simple Tasks**: Configure agents to use cheaper models for straightforward checks
2. **Batch Requests**: Group multiple files in single API calls
3. **Cache Results**: Enable caching for repeated analyses
4. **Set Token Limits**: Configure max tokens per request

Example cost-optimized config:

```json
{
  "costOptimization": {
    "model": "gpt-3.5-turbo",
    "maxTokensPerRequest": 2000,
    "enableCaching": true,
    "batchSize": 5
  }
}
```

## Troubleshooting

### Agent Not Running

**Problem**: Agent doesn't respond to triggers

**Solutions**:
1. Check agent status: `npm run status`
2. View logs: `npm run logs <agent-name>`
3. Verify API keys: `npm run test-config`
4. Restart agent: `npm run restart <agent-name>`

### API Rate Limits

**Problem**: Hitting API rate limits

**Solutions**:
1. Enable rate limiting in config
2. Use request queuing
3. Switch to different model tier
4. Implement exponential backoff

### Poor Agent Responses

**Problem**: Agent provides low-quality feedback

**Solutions**:
1. Refine system prompts in agent config
2. Increase context window size
3. Use more capable model (GPT-4)
4. Provide more examples in prompt

### Integration Errors

**Problem**: GitHub/GitLab integration fails

**Solutions**:
1. Verify token permissions
2. Check webhook URL
3. Review firewall settings
4. Test with: `npm run test-integration github`

## Performance Tuning

### Response Time

Reduce agent response time:

```json
{
  "performance": {
    "parallelization": true,
    "maxConcurrent": 3,
    "timeout": 30000
  }
}
```

### Accuracy

Improve agent accuracy:

```json
{
  "accuracy": {
    "temperature": 0.3,
    "useChainOfThought": true,
    "multipleAttempts": 2
  }
}
```

## Best Practices

### 1. Start with One Agent
Begin with Code Review Agent, master it, then expand

### 2. Review Agent Output Regularly
Check feedback quality weekly and adjust prompts

### 3. Set Clear Standards
Define coding standards in agent configurations

### 4. Monitor Costs
Track API usage and set alerts

### 5. Gather Team Feedback
Ask developers if agent feedback is useful

### 6. Iterate on Prompts
Continuously improve system prompts based on results

### 7. Use Appropriate Models
Don't always use GPT-4; GPT-3.5 works for many tasks

## Security Considerations

### API Key Management
- Store keys in environment variables, never in code
- Use separate keys for development and production
- Rotate keys regularly
- Monitor for unusual API usage

### Code Privacy
- Avoid sending sensitive code to external APIs
- Use self-hosted models for proprietary code
- Enable data retention policies with AI providers
- Review provider privacy policies

### Access Control
- Restrict agent permissions to minimum required
- Use separate GitHub tokens per agent
- Enable audit logging
- Review agent actions regularly

## Support

### Documentation
- Full docs in `/docs` folder
- API reference in `/docs/api.md`
- Examples in `/examples` folder

### Community
- Discord: https://discord.gg/aipaths
- Email: support@aipaths.academy
- GitHub: Report issues on our repository

### Video Tutorials
- Setup Guide: `/en/videos/ai-agents-setup`
- Advanced Configuration: `/en/videos/ai-agents-advanced`
- Troubleshooting: `/en/videos/ai-agents-troubleshooting`

## Updates

Check for updates regularly:

```bash
npm run check-updates
```

## License

This configuration pack is provided by AIPaths Academy for educational and commercial use. See LICENSE file for details.

---

**Ready to deploy autonomous AI agents?**

Start with the Code Review Agent and watch your development workflow transform!

Questions? Email us at support@aipaths.academy
