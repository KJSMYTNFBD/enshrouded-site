"""Inline data/*.json into src/main.src.js -> site/main.js."""
from pathlib import Path
root = Path(__file__).parent
src = (root / 'src/main.src.js').read_text(encoding='utf-8')
tree = (root / 'data/tree-data.json').read_text(encoding='utf-8')
sets = (root / 'data/sets-data.json').read_text(encoding='utf-8')
out = src.replace('__TREE__', tree).replace('__SETS__', sets)
(root / 'site/main.js').write_text(out, encoding='utf-8')
print('site/main.js', len(out), 'bytes')
