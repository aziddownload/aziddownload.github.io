<script>
//<![CDATA[
$('#noAdmin').val('0852-8696-9988');// Ganti Nomor Whatsapp dengan Nomor WhatsApp Anda
$('.whatsapp-btn').click(function () {
$('#whatsapp').toggleClass('toggle');});
		// Onclick Whatsapp Sent!
		$('#whatsapp .submit').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .paket').val() == '') { // Cek paket
				ph = $('#whatsapp .paket').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .paket').focus();
				return false;
			} else if ($('#whatsapp .namadepan').val() == '') { // Cek Nama Depan
				ph = $('#whatsapp .namadepan').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .namadepan').focus();
				return false;
			} else if ($('#whatsapp .namabelakang').val() == '') { // Cek Nama Belakang
				ph = $('#whatsapp .namabelakang').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .namabelakang').focus();
                return false;
            } else if ($('#whatsapp .username').val() == '') { // Cek Username
                ph = $('#whatsapp .username').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .username').focus();
				return false;
            } else if ($('#whatsapp .nomor').val() == '') { // Cek WA
                ph = $('#whatsapp .nomor').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .nomor').focus();
				return false;
            } else if ($('#whatsapp .pembayaran').val() == '') { // Cek bayar
				ph = $('#whatsapp .pembayaran').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .pembayaran').focus();
				return false;
			} else if ($('#whatsapp .informasi').val() == '') { // Cek dari
				ph = $('#whatsapp .informasi').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .informasi').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				// Get Value
				var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
                    paket = $('#whatsapp .paket').val(),
					namadepan = $('#whatsapp .namadepan').val(),
					namabelakang = $('#whatsapp .namabelakang').val(),
					username = $('#whatsapp .username').val(),
					nomor = $('#whatsapp .nomor').val(),
                    pembayaran = $('#whatsapp .pembayaran').val(),
					informasi = $('#whatsapp .informasi').val();
				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +
               ' %2ASaya mau beli%2A: ' + paket + '%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
               ' %0A%2ANama Depan%2A: ' + namadepan + 
               ' %0A%2ANama Belakang%2A: ' + namabelakang + 
               ' %0A%2AUsername%2A: ' + username + 
               ' %0A%2ANo Whatsapp%2A: ' + nomor +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
               ' %0A%2AMetode Pembayaran%2A: ' + pembayaran + '%0A' +
               ' %0A%2ASaya dapat informasi dari%2A: ' + informasi + '%0A' + 
               ' %0A%2ADari%2A ' + via_url);
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}
//]]>
</script>
