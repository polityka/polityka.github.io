const part1 = ["Szanowni Państwo, ", "Pani Redaktor, ", "Panie Pośle, ", "Cały czas powtarzam, ", "Wiem z doświadczenia, ", "Chodzi o to, że ", "Prawda boli: ", "To oczywiste: ", "To chyba fake news! ", "Wczoraj warcholstwo, dziś barbaria: "];
const part2 = ["komuniści z Brukseli ", "niemieckie sądy ", "Berlin i Bruksela ", "homoseksualiści ", "UE i Niemcy ", "w totalnej opozycji ", "Niemcy i brukselscy eurokraci ", "zakłamani bezczelni niemieccy politycy ", "Niemcy ", "ci ludzie, ten system, który odbiera Polakom dzieci ", "niemiecki plan jest prosty: ", "W Radzie Europy "];
const part3 = ["narracją polityków niemieckich ", "przeciwko polskim interesom ", "zgodnie z doktryną komunistyczną ", "kontynuując myśl Hitlera ", "- jest to nagminna praktyka w RFN - ", "z niemiecką arogancją i butą ", "nie są tuzami analityki i elementarnej wiedzy geopolitycznej, "];
const part4 = ["narzucają nam lewackie ideologie, ", "chcą nas oceniać, ", "każą nam zabijać dzieci, ", "odbierają nam suwerenność, ", "szantażują nas, ", "każą nam wprowadzić homo-małżeństwa, ", "chcą skolonizować Polskę, ", "chcą odebrać Polsce część suwerenności, ", "odbierają dzieci Polakom, polskim matkom i rozdzielają je do rodzin muzułmańskich, ", "chcą oceniać polskie sądownictwo, ", "rozmawiają o tym, aby na nowo móc zabijać, wg własnego widzimisię, dzieci - ", "chcą, byśmy byli płatnikiem netto, ", "chcą zabierać pieniądze pod byle ideologicznym pretekstem, ", "narzucają nam szkodliwą transformację energetyczną, "];
const part5 = ["ponieważ boją się silnej Polski. ", "i chcą odebrać nam miliardy. ", "bo stoją po stronie cywilizacji śmierci. ", "ponieważ tęsknią za Trzecią Rzeszą. ", "bo chcą zniszczyć naszą cywilizację. ", "inaczej odbiorą nam miliardy. ", "łamiąc przy tym traktaty unijne. ", "to bezczelny ideologiczny szantaż! "];
const part6 = ["Nie ma na to naszej zgody. ", "Ale my się nie damy! ", "Nie pozwolimy na to! ", "Nie podnosi się ręki na Polskę! ", "Trzeba twardo i z pozycji siły! ", "Jak można tak szkodzić naszej Ojczyźnie! ", "Możemy stworzyć własny fundusz odbudowy. ", "Dlatego krzyczą. ", "Ostateczny koniec sędziowskiej kasty III RP. ", "Mówimy stanowcze NIE niemieckiej hegemonii w UE. ", "Nie będzie żaden urzędnik z Brukseli mówił nam, co jest praworządne. ", "Dla mnie ośrodkiem decyzyjnym jest wyłącznie Polska. ", "Bądźcie lojalni wobec Polski! ", "Czy mamy zrezygnować z suwerenności i polskiego DNA? ", "Ile zła wyrządzają Polsce! ", "Zacznijcie myśleć po polsku! ", "To efekt straszliwej, ideologicznej indoktrynacji ze strony lewicy. ", "Widzimy efekty finansowania i tolerowania ekstremistycznych tęczowych i lewackich organizacji, które skutecznie sieją zamęt w głowach młodych ludzi. "];
const part7 = ["Nie jesteśmy obozem miękiszonów.", "Wszyscy jesteśmy równi wobec prawa.", "Zjednoczona Prawica stoi po stronie Polaków! ", "Musimy chronić polską rację stanu.", "To pas transmisyjny interesów niemieckich w Polsce!", "Czy ta pani jest posłem na Sejm RP?", "Wielu polityków PO będzie siedzieć.", "Praworządność!", "Veto albo śmierć!", "I to jest wstyd!", "Ani kroku w tył!", "Reszcie odpowiem parafrazując: suwerenność, głupcze!", "Jesteśmy suwerennym państwem.", "Polska nie wyrzeknie się suwerenności!", "Nie szkalujcie cały czas Polski!", "Czas zatrzymać to szaleństwo!", "Dura lex, sed lex", "Żadnych wyjątków!"];


function generuj()
{
  var txt = document.getElementById('wypowiedź');
  var txt1 = document.getElementById('wypowiedź1');
  var value = ""
  var value1 = ""
  value1 = value1.concat(part1[Math.floor(Math.random() * part1.length)])
  value = value.concat(part2[Math.floor(Math.random() * part2.length)])
  value = value.concat(part3[Math.floor(Math.random() * part3.length)])
  value = value.concat(part4[Math.floor(Math.random() * part4.length)])
  value = value.concat(part5[Math.floor(Math.random() * part5.length)])
  value = value.concat(part6[Math.floor(Math.random() * part6.length)])
  value = value.concat(part7[Math.floor(Math.random() * part7.length)])
  txt.innerHTML = value;
  txt1.innerHTML = value1;
}
