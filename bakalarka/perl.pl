if (ref($r) eq "HASH") {
        print "r is a reference to a hash.\n";
    }
    unless (ref($r)) {
    	print $r
    	
        print "r is not a reference at all.\n";
    }