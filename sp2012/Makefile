all:	ee120.html phys112.html phys137a.html cs191.html ee105.html
%.html: %
	cd $^ && rm -f $^.md && find *.md | grep ^\\d -P | sort -n | xargs cat > $^.md && markdown $^.md > ../gh-pages/$^.html
clean:
	find * | grep "\(aux|html|log|~\)$$" -P | xargs rm -f
