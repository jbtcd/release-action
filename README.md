# Release action

A GitHub Action for auto tagging your repository.

## Inputs

### `current-version`

**Required** The current version of this repository. Default 0.0.0

## Example usage

```yaml
uses: jbtcd/release-action@0.2.0
with:
  current-version: '1.0.0'
```