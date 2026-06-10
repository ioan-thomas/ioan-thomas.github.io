---
title: 'A disposable Active Directory lab'
description: 'Terraform and Ansible for an AD environment that rebuilds in twenty minutes, so breaking it has no cost.'
pubDate: 2026-06-08
tags: ['active-directory', 'lab', 'automation']
---

A lab you're afraid to break is a lab you won't learn much in. Mine gets destroyed and rebuilt from scratch regularly — partly hygiene, mostly because rebuilding it is one command, so there's never a reason to be precious about it.

## Design decisions

| Decision | Choice | Why |
| --- | --- | --- |
| Hypervisor | Proxmox | Cheap, API-driven, runs on old hardware |
| Provisioning | Terraform | Declarative; the lab *is* the repo |
| Configuration | Ansible | Domain build, users, deliberate misconfigs |
| Scale | 1 DC, 2 workstations, 1 server | Small enough to rebuild fast |

The deliberate misconfigurations are tagged in Ansible, so I can build a clean domain and layer in specific weaknesses one at a time. Testing a technique against a domain where you *know* the only weakness is the one you planted teaches you precisely what that technique needs to work.

## The rebuild

```bash
terraform destroy -auto-approve
terraform apply -var-file=lab.tfvars -auto-approve
ansible-playbook site.yml --tags "domain,users,logging"
```

About twenty minutes end to end, most of it Windows installing updates.

## Logging from day one

The part I'd recommend most: the lab ships logs to a small detection stack from the moment it boots. Replaying my own activity against sensible Windows event logging has been more instructive than most course content — it's one thing to know a technique works, another to see exactly what it leaves behind.

```powershell
# baseline check after build — confirm the DC is shipping events
Get-WinEvent -ListLog Security -ComputerName dc01 |
  Select-Object LogName, RecordCount, IsEnabled
```

Repo layout and the Ansible roles will get their own post once I've cleaned them up.
