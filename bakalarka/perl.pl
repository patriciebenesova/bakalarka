 #$x = "The cat caught the mouse";
 #   @matches = ($x=~/\b\w{3}\b/g);
 #    print for @matches;
 
 #$y = "+420895895895 +421965896854 +420598632412";
 #@pole = split /\+\d{3}/,$y;
 #print @pole;

  #$f = "The programming republic of Perl";
   # @array=($f =~ /^(.+?e)(.*)$/);
    #print "[0] = @array[0], [1]=@array[1], [2]=@array[2]";

$g = "Bylo nás 5";
$d = $g =~ s/5/pět/r;
print  $d;
   
$f = "tangerine";
@a = ($f =~ /(tang|tangerine|tan)/);
print for @a;



