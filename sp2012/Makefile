all:	ee120.html phys112.html phys137a.html cs191.html ee105.html
%.html: %
	cd $^ && rm -f $^.md && find *.md | grep ^\\d -P | sort -n | xargs tail -n +1 | sed -r "s_^==> (.+)\.md <==_<a name='\1'></a>\n_g" > $^.md && markdown $^.md > ../../$^.html
clean:
	find * | grep "\(aux|html|log|~\)$$" -P | xargs rm -f
