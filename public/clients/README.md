# Client logos

Drop the brand logos here using **exactly** these filenames. The home page falls
back to a text label until each file is in place, so partial drops are fine.

| Filename | Brand | Notes |
|---|---|---|
| `faena.png` | Faena | Red serif wordmark — Miami Beach hotel |
| `fisher-island-club.png` | Fisher Island Club | Black ornate scroll-bordered wordmark |
| `portobello-america.png` | Portobello America | Navy serif wordmark |
| `luciana-brito-galeria.png` | Luciana Brito Galeria | Black sans-serif text logo |
| `paulin-paulin-paulin.png` | Paulin, Paulin, Paulin | Black bold sans-serif (Pierre Paulin brand) |
| `morgan-automotive.png` | Morgan Automotive Group | Red "MORGAN" + grey "AUTOMOTIVE GROUP" |
| `fox-paine.png` | Fox Paine | Dark green serif |
| `anc-america.png` | ANC America | White "ANC" + red "AMERICA" — keep dark BG transparent |
| `midway-ford.png` | Midway Ford | Blue Midway + Ford oval |
| `broken-shaker.png` | Broken Shaker | Script logo with palm tree |
| `ag.png` | AG | White A/G monogram |

## Format guidelines

- **PNG with transparent background** (so the grayscale + hover-color treatment works against any backdrop)
- **Aspect ratio:** anything is fine — they're constrained to `max-h-10` (40px) on display
- **Resolution:** ~400×120 px is plenty (we don't need huge files for a logo strip)
- **SVG also works** — just keep the same filename pattern (`{slug}.svg`) and update the `file` field in `lib/constants.ts` accordingly

## Easiest way to drop them in

If you have the originals in `~/Downloads`:

```bash
cd ~/dev/aplusproperty-care-site/public/clients

# Adapt the source filenames to whatever yours are called:
cp ~/Downloads/Faena*.png faena.png
cp ~/Downloads/Portobello*.png portobello-america.png
cp ~/Downloads/Morgan*.png morgan-automotive.png
cp ~/Downloads/Fox*.png fox-paine.png
cp ~/Downloads/ANC*.png anc-america.png
cp ~/Downloads/Midway*.png midway-ford.png
cp ~/Downloads/Broken*.png broken-shaker.png
cp ~/Downloads/AG*.png ag.png
```

Or just drag-and-drop in Finder, renaming each one to match the table above.
