rm *.toc *.aux *.pdf *.log
xelatex "rust guide.tex"
open "rust guide.pdf"