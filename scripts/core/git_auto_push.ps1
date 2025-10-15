{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "1 Generate diff plan",
      "type": "shell",
      "command": "pwsh",
      "args": [
        "-NoProfile",
        "-ExecutionPolicy", "Bypass",
        "-File", "scripts/core/diff_plan_generator.ps1"
      ]
    },
    {
      "label": "2 Apply diff and auto commit",
      "type": "shell",
      "command": "pwsh",
      "args": [
        "-NoProfile",
        "-ExecutionPolicy", "Bypass",
        "-File", "scripts/core/git_auto_commit.ps1"
      ]
    },
    {
      "label": "3 Git auto push to remote",
      "type": "shell",
      "command": "pwsh",
      "args": [
        "-NoProfile",
        "-ExecutionPolicy", "Bypass",
        "-File", "scripts/core/git_auto_push.ps1"
      ]
    },
    {
      "label": "4 Run Vite dev server",
      "type": "shell",
      "command": "pwsh",
      "args": [
        "-NoProfile",
        "-ExecutionPolicy", "Bypass",
        "-Command", "npm run dev"
      ],
      "presentation": {
        "reveal": "always",
        "panel": "dedicated"
      }
    },
    {
      "label": "Full diff commit dev sequence",
      "dependsOrder": "sequence",
      "dependsOn": [
        "1 Generate diff plan",
        "2 Apply diff and auto commit",
        "3 Git auto push to remote",
        "4 Run Vite dev server"
      ]
    }
  ]
}
