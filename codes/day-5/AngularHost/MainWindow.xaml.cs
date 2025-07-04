using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Web.WebView2.Wpf;
using Microsoft.Web.WebView2.Core;

namespace AngularHost
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            InitializeWebView2Async();

        }
        private async void InitializeWebView2Async()
        {
            await ngWebView.EnsureCoreWebView2Async();
            this.ngWebView
                .CoreWebView2
                .SetVirtualHostNameToFolderMapping(
                "siemens.com",
                $"{Environment.CurrentDirectory}\\pms-app",
                CoreWebView2HostResourceAccessKind.DenyCors
                );

            ngWebView.Source = new Uri("http://siemens.com/index.html");
        }
    }
}